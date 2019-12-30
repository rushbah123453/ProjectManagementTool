package com.project.management.ppm.security;

import com.project.management.ppm.domain.User;
import com.project.management.ppm.services.CustomUserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

import static com.project.management.ppm.constants.SecurityConstants.HEADER_STRING;

public class JWTAuthenticationFilter extends OncePerRequestFilter {


    @Autowired
    private JWTTokenProvider jwtTokenProvider;

    @Autowired
   private CustomUserDetailsServiceImpl customUserDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {

        try {
            String jwt=getJWTFromRequest(httpServletRequest);
            if (StringUtils.hasText(jwt) && jwtTokenProvider.validateToken(jwt)){
                Long userId=jwtTokenProvider.getUserIdFromToken(jwt);
                User userDetails=customUserDetailsService.loadUserById(userId);
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(
                        userDetails,null, Collections.emptyList()
                );

                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }


        }catch (Exception ex){
            logger.error("could not set security context ");
        }

        filterChain.doFilter(httpServletRequest,httpServletResponse);
    }


    private String getJWTFromRequest(HttpServletRequest httpServletRequest){
        String bearerString=httpServletRequest.getHeader(HEADER_STRING);
        if (StringUtils.hasText(bearerString)&&bearerString.startsWith(HEADER_STRING)){
            return bearerString.substring(7,bearerString.length());
        }
        return null;
    }


}

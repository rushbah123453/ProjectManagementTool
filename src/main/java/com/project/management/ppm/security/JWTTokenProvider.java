package com.project.management.ppm.security;

import com.project.management.ppm.domain.User;
import io.jsonwebtoken.*;
import lombok.extern.java.Log;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.project.management.ppm.constants.SecurityConstants.EXPIRATION_TIME;
import static com.project.management.ppm.constants.SecurityConstants.SECRET;

@Component
public class JWTTokenProvider {


    //Generate Token
    public String generateToken(Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Date now = new Date(System.currentTimeMillis());
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);
        String userId = Long.toString(user.getId());
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", user.getId());
        claims.put("username", user.getUsername());
        claims.put("fullName", user.getFullName());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setExpiration(expiryDate)
                .setIssuedAt(now)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }


    //validate Token
    public boolean validateToken(String token){

        try {
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
            return true;
        }catch (SignatureException ex){
            System.out.println("Invalid JWT Signature");
        }catch (MalformedJwtException ex){
            System.out.println("Invalid JWT Token");
        }catch (ExpiredJwtException ex){
            System.out.println("Expired JWT Token");
        }catch (UnsupportedJwtException ex){
            System.out.println("Unsupported JWT Token");
        }catch (IllegalArgumentException ex){
            System.out.println(" JWT Token is empty ");
        }
        return false;
    }

    //get UserId From Token
    public Long getUserIdFromToken(String token){
        Claims claims=Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
        String id=(String) claims.get("id");
        return Long.parseLong(id);
    }

}

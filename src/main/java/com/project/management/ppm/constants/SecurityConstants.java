package com.project.management.ppm.constants;

public final class SecurityConstants {

    private SecurityConstants(){ } // so that no one can instantiate it

    public static final String SIGN_UP_URLS="/users/**";
    public static final String H2_URL="/h2-console/**";
    public static final String SECRET="SecretKeyToGenJWT";
    public static final String TOKEN_PREFIX="Bearer "; // space is necessary after Bearer
    public static final String HEADER_STRING="Authorization";
    public static final long EXPIRATION_TIME=80000000; //30 seconds


}

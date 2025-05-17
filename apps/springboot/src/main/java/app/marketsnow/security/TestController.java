package app.marketsnow.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public String test(@AuthenticationPrincipal Jwt jwt) {
        String email = jwt.getClaim("email");
        if (email == null) {
            email = jwt.getSubject();
        }

        return "Hello, your email is: " + email;
    }
}

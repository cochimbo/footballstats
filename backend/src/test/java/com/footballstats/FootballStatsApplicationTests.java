package com.footballstats;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = "spring.r2dbc.url=r2dbc:h2:mem:///testdb-test")
class FootballStatsApplicationTests {

    @Test
    void contextLoads() {
    }

}
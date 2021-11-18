package com.example.server.controller;
package com.prashant.cap.bipc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserDetailController {

    @Autowired
    private UserDetailService userDetailService;



    //add user
    @PostMapping("/signup")
    public UserDetail addUserDetail(@RequestBody UserDetail userDetail){

        return this.userDetailService.addUserDetail(userDetail);
    }
    
}


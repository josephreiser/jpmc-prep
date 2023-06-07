package com.jpmc.crm;
import org.springframework.data.repository.CrudRepository;
import com.jpmc.crm.User;

public interface UserRepository extends CrudRepository<User, Integer>{
    
}

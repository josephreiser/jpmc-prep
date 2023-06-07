package com.jpmc.crm;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
  
    private String name;
  
    private String email;

    private Integer net_worth;
  
    public Integer getId() {
      return id;
    }
  
    public void setId(Integer id) {
      this.id = id;
    }
  
    public String getName() {
      return name;
    }
  
    public void setName(String name) {
      this.name = name;
    }
  
    public String getEmail() {
      return email;
    }
  
    public void setEmail(String email) {
      this.email = email;
    }

    public Integer getNetWorth() {
        return net_worth;
      }
    
      public void setNetWorth(Integer net_worth) {
        this.net_worth = net_worth;
      }
}

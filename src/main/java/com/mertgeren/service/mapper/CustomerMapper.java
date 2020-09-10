package com.mertgeren.service.mapper;

import com.mertgeren.domain.Customer;
import com.mertgeren.service.dto.CustomerDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface CustomerMapper extends EntityMapper<CustomerDTO, Customer> {

    Customer toEntity(CustomerDTO customerDTO);

    CustomerDTO toDto(Customer customer);

    default Customer fromId(Long id) {
        if (id == null) {
            return null;
        }
        Customer customer = new Customer();
        customer.setId(id);
        return customer;
    }
}

import { Phone } from '@faker-js/faker/phone'
import * as EmailValidator from 'email-validator';
import { copyFile } from 'fs'
import { Client } from '../models/Client'

export const isClientValid = (client: Client) => {
    const { name, address, cpf, email, phone } = client

    if(!name) {
        return false
    }

    if(!address) {
        return false
    }

    if(EmailValidator.validate(email) == false) {
        return false
    }

    if(!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        return false
    }

    if(!phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
        return false
    }

    return true;
}



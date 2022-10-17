export interface Employee {
    "roleId": number,
    "statusId": number,
    "addressId": number,
    "firstName": string,
    "lastName": string
    "email": string
    "password": string
    "phone": string
    "companyId": number,
    "country": string
    "plans": number
}

export interface loginEmployee {
    "username": string,
    "password": string
}

export interface Company {
    "userId": number,
    "statusId": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "contact": string,
    "company": string,
    "website_url": string,
    "addresss": string,
    "plans": number,
    "billing": string,
    "imageurl": string
}
export interface Task {
    "id": number,
    "taskname": string,
    "taskrate": string,
    "status": string,
    "billingid": number
}


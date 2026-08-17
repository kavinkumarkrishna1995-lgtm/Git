// import { test, expect } from '@playwright/test';
// import fs from 'fs';

// test('Deserialization', async () => {

//     const jsonData = fs.readFileSync('employee.json', 'utf-8');

//     const employee = JSON.parse(jsonData);

//     console.log("Second Mobile Number:", employee.phone.mobile2);

//     expect(employee.skills).toContain('api_testing');

// });


import { test } from '@playwright/test';
import fs from 'fs';

test('Serialization', async () => {

    const employee = {
        empName: "Kavin",
        id: 1234,
        phone: {
            mobile1: "12345678990",
            mobile2: "09876654411"
        },
        skills: [
            "manual",
            "automation_testing",
            "api_testing"
        ]
    };

    const jsonData = JSON.stringify(employee, null, 2);

    fs.writeFileSync('employee.json', jsonData);

});
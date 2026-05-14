const country = { 

name: 'Nigeria',
capital: 'Abuja',
population: '200M' 

};

for (let key_value in country) {

    console.log(key_value + ": " + country[key_value]);
}

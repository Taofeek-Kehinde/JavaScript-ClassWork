function mergeTwoObjects() {
    const personal = {
        name: 'Kemi',
        age: 27 
    }

    const professional = {
        role: 'Designer',
        company: 'TechCorp'
    }

  // using spread to merge them
    return { ...personal, ...professional };
}

let result = mergeTwoObjects();
console.log(result);

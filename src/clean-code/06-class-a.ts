
(() => {

    //Sem o principio de responsabilidade unica

    type Gender = 'M' | 'F';

    class Person {
    
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date,) {
            this.name      = name;
            this.gender    = gender;
            this.birthDate = birthDate
        }
    }


    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        ckeckCredentials() {
            return true;
        }
    }


    class Settings extends User {
        constructor(
            public woekingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthDate              : Date
        ) {
            super(email,role,name,gender,birthDate);
            this.lastAccess = new Date();
        }
    }


    const userSettings = new Settings(
        '/usr/home',
        '/home',
        'higino@gmail.com',
        'Admin',
        'Higino',
        'M',
        new Date('1997-07-04')

    );

    console.log({userSettings})
    


  
  


    // const newPerson = new Person('Higino', 'M', new Date('1997-07-04'));
    // console.log(newPerson);


})();

(() => {

    //Sem o principio de responsabilidade unica

    type Gender = 'M' | 'F';

    interface PersonProperties {
        name     : string;
        gender   : Gender;
        birthDate: Date;
    }

    class Person {
        public name     : string;
        public gender   : Gender;
        public birthDate: Date;
    
        constructor({name,gender,birthDate}: PersonProperties ) {
            this.name      = name;
            this.gender    = gender;
            this.birthDate = birthDate
        }
    }


    interface UserProperties {
        email      : string;
        role       : string;
        name       : string;
        gender     : Gender;
        birthDate  : Date;
    }


    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
            name,
            gender,
            birthDate,
        }: UserProperties) {
            super({name, gender, birthDate});
            this.lastAccess = new Date();
            this.email = email,
            this.role = role
        }

        ckeckCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties {
        workingDirectory   : string;
        lastOpenFolder     : string;
        email              : string;
        role               : string;
        name               : string;
        gender             : Gender;
        birthDate          : Date;

    }


    class Settings extends User {

        public lastOpenFolder : string;
        public workingDirectory: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate   
        }: UserSettingsProperties) {
            super({email,role,name,gender,birthDate});
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }


    const userSettings = new Settings({
       workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email:'higino@gmail.com',
        role:'Admin',
        name:'Higino',
        gender:'M',
       birthDate: new Date('1997-07-04')
    });

    console.log({userSettings})
    


  
  


    // const newPerson = new Person('Higino', 'M', new Date('1997-07-04'));
    // console.log(newPerson);


})();
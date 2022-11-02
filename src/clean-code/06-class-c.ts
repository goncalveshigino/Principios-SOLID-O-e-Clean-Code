
(() => {

    //Aplicando o principio de responsabilidade unica
    //Priorizar a compusicao de heranca

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
    }


    class User {
        public email     : string;
        public role      : string;
        public lastAccess: Date;

        constructor({
            email,
            role,  
        }: UserProperties) {
            this.lastAccess = new Date();
            this.email = email,
            this.role = role
        }

        ckeckCredentials() {
            return true;
        }
    }



    interface SettingsProperties {
        workingDirectory   : string;
        lastOpenFolder     : string;  
    }


    class Settings {

        public lastOpenFolder : string;
        public workingDirectory: string;

        constructor({
            workingDirectory,
            lastOpenFolder,  
        }: SettingsProperties) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProperties {
        workingDirectory: string;
        lastOpenFolder  : string;
        email           : string;
        role            : string;
        name            : string;
        gender          : Gender;
        birthDate       : Date;
    }


    class UserSettings {

        public person   : Person;
        public user     : User;
        public settigns: Settings;
        
        constructor({
            name, gender, birthDate,
            email, role,
            lastOpenFolder, workingDirectory,
        }: UserSettingsProperties) {
            this.person = new Person({ name, gender, birthDate });
            this.user = new User({ email, role });
            this.settigns = new Settings({lastOpenFolder,workingDirectory})
         }
    }


    const userSettings = new UserSettings({
       workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email:'higino@gmail.com',
        role:'Admin',
        name:'Higino',
        gender:'M',
       birthDate: new Date('1997-07-04')
    });

    console.log({userSettings})
    


})();
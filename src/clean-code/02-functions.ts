(() => {

 
    function getMoviesById(movieId: string) {
        console.log({ movieId });
    }

    
    function getMovieCastById(id: string) {
        console.log({ id });
    }

  
    function gerActorBioById(id: string) {
        console.log({ id });
    }
    
    interface Movie {
        title:       string;
        description: string;
        rating:      number;
        cast:        string[];
    }

    function createMovie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }



    function createActor( fullName: string, birthdate: Date ): boolean {
        
   
        if ( fullName === 'Higino' ) return false;

        console.log('Crear actor');
        return true;        

    }

    
})();
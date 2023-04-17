document.addEventListener('alpine:init', () => {
    Alpine.store('env', {
        _url: 'http://localhost:9095/',

        init(){
        },
    }),
    Alpine.data('data', ()=>{
        
    return{
        
        genders: [
            {label:'m', text:'Male'},
            {label:'f', text:'Female'},
            {label:'x', text:'Others'}
        ],
        user:null,
        async init() {
            try {
                await fetch('http://localhost:9095/user/'+ULID.ulid(), {
                  method: 'GET',
                }).then((res) => {
                  if (res.ok) {
                    res.json().then(async (data) => {
                      this.user = await data;
                    })
                  }else{
                    console.log(res.status, res.statusText);
                    console.log('Something went wrong');
                  }
                });


              } catch (error) {
                console.log('Something went wrong');
              };
        },
        
        
    }})
})

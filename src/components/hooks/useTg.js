const tg = window.Telegram.WebApp;

export function useTg(){

    const onClose = () =>{
        tg.close()
    }

    async function Ready(){
        tg.ready();
    }

    const onToggleButton = () =>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
    }

    return{
        onClose,
        onToggleButton,
        Ready,
        user: tg.initDataUnsafe?.user,
        tg
    }
}
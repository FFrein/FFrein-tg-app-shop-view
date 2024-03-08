const tg = window.Telegram.WebApp;

export function useTg(){

    const onClose = () =>{
        tg.close()
    }

    const onToggleButton = () =>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
    }

    const sendData = (data)=>{
        try{
          tg.SendData(JSON.stringify({A:"ASD"}));
        }
        catch(e){
            console.log(e)
        }
    };
    

    return{
        onClose,
        onToggleButton,
        sendData,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}
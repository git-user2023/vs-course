const getUser = async()=>{
    try {
        const res = await fetch('i.ua')
        const data = await res.json()
    } catch (error) {
        console.log(error);
    }
}
getUser()
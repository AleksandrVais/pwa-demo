import {useEffect, useState} from "react";

const request = async (postId: number) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return await response.json()
}

export const CachingPage = () => {
    const [data, setData] = useState({})
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        request(counter).then(response => setData(response))
    }, [counter])

    const onClickButton = () => setCounter(prev => prev + 1)

    return <div>
        <button onClick={onClickButton}>Increase</button>
        {JSON.stringify(data)}
    </div>
}

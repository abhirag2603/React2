import React, { useState, useEffect } from 'react';
import './App.css';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    function downloadMeme() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.font = '80px Impact';
            ctx.textAlign = 'center';
            ctx.fillText(meme.topText, canvas.width / 2,90);
            ctx.fillText(meme.bottomText, canvas.width / 2, canvas.height - 20);
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = url;
            link.click();
        };
        img.src = meme.randomImage;
    }

    return (
        <>
            <div className="forms">
                <div className="inp1">
                    <label>Top text</label>
                    <input type="text" name="topText" value={meme.topText} placeholder='Shut up' onChange={handleChange}></input>
                </div>
                <div className="inp2">
                    <label>Bottom text</label>
                    <input type="text" name="bottomText" value={meme.bottomText} placeholder='And take my money' onChange={handleChange}></input>
                </div>
            </div>
            <button onClick={getMemeImage}>Get a meme image</button>
            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button onClick={downloadMeme}>Download meme</button>
        </>
    );
}

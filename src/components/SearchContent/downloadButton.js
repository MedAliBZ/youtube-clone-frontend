import React,{useState,useEffect} from 'react'
import './SearchContent.css'

export default function DownloadButton({videoId}) {
    const [downloadUrl, setDownloadUrl] = useState('')

    const downlaodapi = (videoId) => {
        fetch(`https://free-mp3-mp4-youtube.p.rapidapi.com/${videoId}/MP3/spinner/2196f3/100/box-button/2196f3/tiny-button/Download/FFFFFF/yes/FFFFFF/none`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-mp3-mp4-youtube.p.rapidapi.com",
                "x-rapidapi-key": "34d319fce6msh24364e0e0846afbp16acf3jsneb303f62097d"
            }
        })
            .then(response => {
                return (response.json());
            }).then(data => setDownloadUrl(data.url))
            .catch(err => {
                console.log(err);
            });
    }
useEffect(() => {
    downlaodapi(videoId)
}, [videoId])

    return (
        <div className='downloadbutton'>
            <a href={downloadUrl}>Download mp3</a>
        </div>
    )
}

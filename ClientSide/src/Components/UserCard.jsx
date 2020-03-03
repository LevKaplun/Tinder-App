import React from 'react';

export default function UserCard(props) {
    const LikeClicked=()=>{
props.sendLikeClicked(props.user.Id);
    }
    const NextClicked=()=>{
        props.sendNextClicked();
    }
    return (
        <div>
             {props.user.Name} <br/><img  src={props.user.Image}/> <br/>  Age: {props.user.Age} <br/> Height:{props.user.Height}<br/> City:{props.user.City}
    {props.user.Premium==true? <p>hobbies: {props.user.Hobbies.join(" , ")}</p>:"" }
             <br/> <button className="btn" id="button-like" onClick={NextClicked}><img class="btnimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAaGhr7+/vY2Njz8/Po6OjLy8vd3d329vbi4uLU1NQYGBhISEhFRUXPz88mJiaIiIiTk5N1dXW1tbWCgoJra2s8PDxPT0+cnJwpKSm/v79hYWFXV1eZmZl8fHy2tranp6cyMjIRERE3NzfDw8MgICCtvOfjAAAEuElEQVR4nO2d6VJiQQxGb1BARQGXEZdRGRfe/xFnRsoLQu8dKv3FnP9a3ylLyE26c7vOMAzDMAzDMLyczCZD6QyH5HFBROeX0jEOxxWteT2STnIgxvTFhVLFaW9It9JZDsKItniRTnMIjrcN6Uo6zgH4bkh/pPPws2NIj9KB2Nk1pLF0Im72DOlEOhIz+4ZvI+lMvOwb0uBUOhQrDkOaqipuXIb0WzoVJ05DupaOxYjbkBQ9S3kM6V46GBs+Q7qRTsaF11BNceM3pIl0Nh4ChnQmHY6FkOFARQMuZEgLDcVN0JCepOMxEDbU0JyKGNIv6YDVxAzpWTphLVFD+OImbojenEowpJl0yCpSDLGLmyTDN+TiJskQevKWZog8eUs0BC5uUg1xJ2/JhrCTt3RD1MlbhiEtpcMWkWOI2ZzKMoScvOUZEmBxk2m4wlPMNKQLuOFiriHe5C3bEG7ylm+INnkrMASbvJUYYjWnigyhipsyQ6TiptCQcI4VlRrOYRRLDWmKUtwUG8JM3soNUZpTFYYgk7caQ4zJW5UhRHFTZ4hQ3FQaAhwrqjVsf/JWbbhqvbipNqRF48VNvSHdSTuEYTBsvDnFYdj25I3FsOnJG49hy5M3JkNaSot44TJst35jM2y2OcVneN5occNnSK9tTt4YDRttTnEashQ3R8zwGlZO3mb3t4v5gJtzVsOKydv4ljfJwSicvN28SwdPp6Q5NZvGf29DfGQLXkpHziWzuDm9kw6cT1ZxM5pLxy1gnlHcDFfSaYuYJiseYX3GbEievF1LJy0mcfK2lM5ZQdLkbTiQjllDyuTtKv5rWibenBpKR6wlWtzcSyes5jhiCP1fuCY8eZtIx2MgfKwI/HNmzSJU3DxJp2Phwi94ilhyO/A3p86ko3Hh/Vrk7YEJ8uC7mzmTTsaG71txHP9REHxDKf1/Q/3/h/o/S/V/H+qvabpn6XAcBOtSDc8WD+HesPrnwx/wjK+/T4P+DJxwEAy7X5o0DFbf8+66F+mcxSTfGFI/e4KdH2Ycjho9SKct4CHrgJv6OX6n/yxG9wPO0/xjuZCOnU7phT3t59o++TybuGr8bCLDxQvN50sPQ3NnhNnhNGxzfSTnWf0mD7LbfYsM1N+ZUX/vqd2V2Hb/MA31d0jV3wNuspTpsfv4cdTvVGh+6ZftNomhfj9Ns7XaBtsTFQRikantawugfuee+r2JMIu9i/eXtrkiwoHtoPXQatvJge2CdoJQyvTYTnYH6vfqtzhBC2Hvt9gFppTpyTTEKWV67F1B3wEqZXrsnV3bLKXDFmHvztvQ8gQthL3D8guQtpMDe5fsmndcQXun85rmJ2gh7N3q1PJhoCTihlBtJwdRQ6y2k4OYIcYELUTEELeU6QkbokzQQgQNp8ClTE/IcIBcyvSEDKFLmZ6AYew6PQh+Q8i2kwOv4VI6GRc+Q9C2kwOPIdgELYTbEG2CFsJpCDdBC+EyBG47OXAYDuBGhEH2Dd9wDgMlsW+IOEELsWeopZTp2TUEbzs52DHUU8r0fDdEnaCFGG0L4redXGytFVHQdnKxWXarq5TZ4mst3KtWwa77+L8bZqDoecnByWyioq1mGIZhGIZhsPAX1LtXNkqwOCkAAAAASUVORK5CYII="/></button>
        <button className="btn" id="btn" onClick={LikeClicked}><img class="btnimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"/></button>

        </div>
    );
}
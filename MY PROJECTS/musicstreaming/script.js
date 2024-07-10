document.addEventListener('DOMContentLoaded', () => {
    const tableRows = document.querySelectorAll('tr');

    function onRowClick(event) {

        const rowData = event.currentTarget.querySelectorAll('td');
        const songName = rowData[1].textContent;
        
        if(songName=="Gasolina"){
            var img='https://upload.wikimedia.org/wikipedia/en/1/16/Daddy_Yankee_Gasolina_cover_art.png';
            var src='data/Gasolina.mp3';
        }
        if(songName=="Perfect"){
            var img='https://i1.sndcdn.com/artworks-000257986424-mg4cpu-t500x500.jpg';
            var src='data/Perfect.mp3';
        }
        if(songName=="Trippy Trumpet and Savage"){
            var img='https://i1.sndcdn.com/artworks-000638221189-j57t83-t500x500.jpg';
            var src='data/freaks.mp3';
        }
        if(songName=="What Makes You Beautiful"){
            var img='https://i.scdn.co/image/ab67616d0000b273fd20e3d8ad722ecc509c3324';
            var src='data/What Makes You Beautiful.mp3';
        }
        if(songName=="Until I Found You"){
            var img='https://images.genius.com/df55dd551fbc956ba1b22856ab655b7e.1000x1000x1.jpg';
            var src='data/Until I Found You.mp3';
        }
        if(songName=="Barbie Girl"){
            var img='https://e.snmc.io/i/1200/s/184621206c0fc1e2ea7be03f65c692ff/1617922';
            var src='data/barbie.mp3';
        }
        if(songName=="Havana"){
            var img='https://upload.wikimedia.org/wikipedia/en/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png';
            var src='data/havana.mp3';
        }
        if(songName=="Who Says"){
            var img='https://static.wikia.nocookie.net/selenagomez/images/5/50/Who_says_cover_%283%29.jpg';
            var src='data/whosays.mp3';
        } 
        if(songName=="Stan"){
            var img='https://upload.wikimedia.org/wikipedia/en/e/e8/Eminem_-_Stan_CD_cover.jpg';
            var src='data/stan.mp3';
        }
        if(songName=="Bones"){
            var img='https://upload.wikimedia.org/wikipedia/en/b/bb/Imagine_Dragons_Bones_cover.jpg';
            var src='data/bones.mp3';
        }
        if(songName=="how deep?"){
            var img='https://cdn.smehost.net/sonymusicca-caprod/wp-content/uploads/2022/03/tai-verdes.jpg';
            var src='data/howdeep.mp3';
        }
        if(songName=="The Box"){
            var img='https://i1.sndcdn.com/artworks-2iOFK2fDChldGcFL-3z47Zw-t500x500.jpg';
            var src='data/box.mp3';
        }
        if(songName=="Stereo Hearts"){
            var img='https://i.pinimg.com/474x/67/b6/a7/67b6a7533050375b6e0ef14fc13bb7ee.jpg';
            var src='data/stereo.mp3';
        }
        if(songName=="Not Into You"){
            var img='https://images.genius.com/c6c6d34b96a447c23474d10ac069d0f5.720x404x1.jpg';
            var src='data/brooksie.mp3';
        }
        if(songName=="We Will Rock You"){
            var img='https://upload.wikimedia.org/wikipedia/en/1/18/We_Will_Rock_You_by_Queen_%281977_French_single%29.png';
            var src='data/wwry.mp3';
        }

    updatePlayer(songName,img,src);

        alert(`You clicked on: ${songName} by ${artist} (${length}, Rating: ${rating})`);
    }

    tableRows.forEach(row => {
        row.addEventListener('click', onRowClick);
    });
});
function updatePlayer(sn, imageURL, audioSource) {
    const imgElement = document.querySelector('.imgaud');
    const songNameParagraph = document.getElementById('songname');
    const audioElement = document.getElementById('audiosong');

    imgElement.src = imageURL;
    songNameParagraph.textContent = sn;
    audioElement.src = audioSource;
    audioElement.play();

}
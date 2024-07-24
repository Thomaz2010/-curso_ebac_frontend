
document.addEventListener('DOMContentLoaded', function() {
   
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const avatar = document.querySelector('.profile-avatar');
    const repos = document.querySelector('.repositorios');
    const follower = document.querySelector('.seguidores');
    const following = document.querySelector('.seguindo');
    const link = document.querySelector('.profile-link');

    fetch("https://api.github.com/users/Thomaz2010")
    .then(function(res) {
       
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.statusText}`);
        }
        return res.json();
    })
    .then(function(json) {
        try {
           
            name.innerText = json.name;
            username.innerText = json.login ;
            avatar.src = json.avatar_url; 
            repos.innerText = json.public_repos;
            follower.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
            link.innerText = "Ver no Github";
        } catch (error) {
           
            console.error("Erro ao atualizar a página:", error);
            alert("Erro ao atualizar a página.");
        }
    })
    .catch(function(error) {
       
        console.error("Erro ao obter os dados do GitHub:", error);
        alert("Erro ao obter os dados do GitHub.");
    });
});

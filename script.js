body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
}

header {
    background: #333;
    color: #fff;
    padding: 10px 0;
}

header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

.section {
    padding: 60px 20px;
    text-align: center;
    background: white;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-picture {
    width: 150px;
    height: 150px;
    background: url('profile.jpg') center/cover no-repeat;
    border-radius: 50%;
    margin: 0 auto 20px;
}

h1 span {
    color: #007BFF;
}

button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

button a {
    color: white;
    text-decoration: none;
}

#about ul {
    list-style: none;
    padding: 0;
}

#about ul li {
    margin: 10px 0;
}

.project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.project {
    background: #f9f9f9;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: calc(33% - 40px);
}

.project h3 {
    margin-top: 0;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form label {
    margin-top: 10px;
}

form input, form textarea {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

form button {
    margin-top: 20px;
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #333;
    color: #fff;
}

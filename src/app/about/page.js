const fetchMovies = async () => {
    const response = await fetch('https://dummyapi.online/api/movies');
    return response.json();
}

const About = async () => {
    const data = await fetchMovies();

    return (
        <section className="about">
            <div className="container">
                <h2>This is an about page</h2>
                {data.map(a => (
                    <div key={a.id}>
                        <h4>{a.movie}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;
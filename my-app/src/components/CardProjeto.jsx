const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  margin: '1rem',
  width: '300px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

function CardProjeto({projeto}) {
    return(
        <div>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricaoCurta}</p>
            <div>
                {projeto.tecnologias.map(tech => (
                    <span 
                    key={tech} 
                    style={{ marginRight: '5px', backgroundColor: '#e9ecef', padding: '2px 5px', borderRadius: '3px', fontSize: '12px' }}>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CardProjeto;
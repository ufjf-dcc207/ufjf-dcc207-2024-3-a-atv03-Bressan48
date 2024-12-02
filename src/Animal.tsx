import "./Animal.css"

interface AnimalProps {
    icone: string;
    nome: string;
    peso: number;
    extincao?: boolean;
}
export default function({icone, nome, peso, extincao}:AnimalProps){
    if(extincao){
            return ( <div className="animal">
                <div className="icone">{icone}</div>
                <div className="nome">{nome}</div>
                <div className="peso">{peso.toLocaleString()} Kg</div>
                {extincao && <div className="extincao">Em extinção!</div>}
                </div>
                );
    } else {
        return ( <div className="animal">
            <div className="icone">{icone}</div>
            <div className="nome">{nome}</div>
            <div className="peso">{peso.toLocaleString()} Kg</div>
            <div className="extincao"></div>
            </div>
            );
    }
}
type Props = {
    imageUrl: string,
    altText: string,
    id: number,
    onClick: (id: number) => void;
}

const Flag = ({imageUrl, altText, id, onClick}: Props) => {

    return (
        <div>
            <button className="cursor-pointer" onClick={() => onClick(id)}>
                <img src={imageUrl} alt={altText} className="max-h-[250px] w-auto"/>
            </button>
        </div>
    )
}

export default Flag;
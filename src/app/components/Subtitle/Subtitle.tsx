type Props = {
    text: string,
}

const Subtitle = ({text}: Props) => {
    return (
        <section>
            <h3>{text}</h3>
        </section>
    )
}

export default Subtitle;
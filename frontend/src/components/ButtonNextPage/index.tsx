import './styles.css'

type Props = {
    onNextPage: () => void;
};

export default function ButtonNextPage({ onNextPage }: Props) {
    return (
        <div className="dsc-btn-next-page" onClick={() => onNextPage()}>Carregar mais</div>
    );
}
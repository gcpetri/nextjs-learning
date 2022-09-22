import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

interface Props {
    initialData: any,
}

export default function FetchComponent({ initialData }: Props): JSX.Element {
    const [data, setData] = useState<any>({}); // TODO: set initial data

    const [dataChanged, setDataChanged] = useState<number>(0);

    useEffect(() => {
        setDataChanged(dataChanged + 1);
    }, [data]);

    const makeFetchCall = async () => { // TODO: make 3rd party fetch call  

    }

    return (
        <>
            <h2>Exercise 9</h2>
            <p>{JSON.stringify(data)}</p>
            <button onClick={makeFetchCall}>
                Click Me
            </button>
            <span>Data Changed {dataChanged} Times</span>
        </>
    )
};

export const getStaticProps: GetStaticProps = () => {
    // TODO: get result from /api/helper
    // hint you can't call server from server so use logic from /lib
    return {
        props: { initialData: {} }
    }
}
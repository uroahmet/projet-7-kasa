import React, { useEffect, useState } from 'react';
import "./ApartmentPage.css";
import { DescriptionPanel } from '../components/DescriptionPanel';
import { ImageBanner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { useParams, useNavigate } from 'react-router-dom';

export function ApartmentPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [flat, setFlat] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApartmentData();
    }, [id]);

    async function fetchApartmentData() {
        try {
            const res = await fetch("/logements.json");
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.statusText}`);
            }
            const flats = await res.json();
            const flat = flats.find((flat) => flat.id === id);
            if (!flat) {
                navigate('/404'); // Rediriger vers la page 404 si l'appartement n'est pas trouvé
                return;
            }
            setFlat(flat);
        } catch (error) {
            setError(error.message);
        }
    }

    if (error) return <div>Error: {error}</div>;
    if (flat == null) return <div>...Loading</div>;

    return (
        <div className='apartment-page'>
            <ImageBanner pictures={flat.pictures} />
            <ApartmentHeader flat={flat} />
            <div className='apartment__description__area'>
                <DescriptionPanel title="Description" content={flat.description} />
                <DescriptionPanel
                    title="Équipements"
                    content={<ul>{flat.equipments.map((eq, index) => (<li key={index}>{eq}</li>))}</ul>}
                />
            </div>
        </div>
    );
}

export default ApartmentPage;

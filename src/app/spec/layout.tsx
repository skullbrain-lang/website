import { getSpecificationData } from './data';
import SpecLayoutClient from './SpecLayoutClient'; // Import the client component

export default async function SpecLayout({ children }: { children: React.ReactNode }) {
    // Fetch data once for the entire route segment
    const specEntries = await getSpecificationData(); 

    // Pass the data down to the client component
    return (
        <SpecLayoutClient specEntries={specEntries}>
            {children}
        </SpecLayoutClient>
    );
}
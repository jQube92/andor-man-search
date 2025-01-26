import { useEffect, useState } from 'react';
import './App.css'
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import data, { ManualData } from './man-data';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import _ from 'lodash';


function App() {
    const [searchText, setSearchText] = useState<string>('');
    const [entries, setEntries] = useState<ManualData[]>(data);

    useEffect(() => {
        if(searchText === ""){
            setEntries(data);
        } else {
            const result = _.filter(data, (entry: ManualData) => {
                const titleParsed = _.toLower(_.trim(entry.title));
                const result = titleParsed.includes(searchText)
                return result;
            });
            
            setEntries(result);
        }
    }, [searchText]);

    function truncate(str: string, n: number){
        return (str.length > n) ? str.slice(0, n-1) + "..." : str;
    };

    const itemTemplate = (manEntry: ManualData, index: number) => {
        return (
            <div className="flex w-full my-2" key={index}>
                <div>
                    <div className="text-2xl font-bold text-900">{manEntry.title}</div>
                    <div >{truncate(manEntry.content, 100)}</div>
                </div>
                <div className='flex align-content-center flex-wrap'>
                    <div id='button'>
                        <Button icon="pi pi-chevron-right" rounded outlined/>
                    </div>
                </div>
            </div>
        );
    };

    const listTemplate = (items: ManualData[]) => {
        if (!items || items.length === 0) {
            return null
        };

        const list = items.map((product, index) => {
            return itemTemplate(product, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <>
            <div id="heading" className='w-full py-3'>
                <FloatLabel>
                    <InputText id="search" className='w-full' value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
                    <label htmlFor="search">Suchtext</label>
                </FloatLabel>
            </div>
           
            <div className='w-full'>
                <DataView value={entries} listTemplate={() => listTemplate(entries)} />
            </div>
        </>
    )
}
export default App

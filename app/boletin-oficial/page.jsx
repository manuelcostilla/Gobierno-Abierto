import { BoletinOficialTexto } from './components/BoletinOficialTexto'
import BoletinOficialButtons from './components/BoletinOficialButtons'

const PdfDownloader = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <BoletinOficialTexto />
      <BoletinOficialButtons />
    </div>
    </>
  )
}
export default PdfDownloader

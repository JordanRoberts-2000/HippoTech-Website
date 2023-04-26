import PriceOption from './Components/PriceOption'

const PricesSection = () => {
  return (
    <div className='h-[100lvh] flex flex-col py-8'>
        <div className='mb-4'>
            <h3 className='text-white font-medium leading-6 py-2 px-6 bg-gray-900 w-fit ml-8 mt-[-3rem]'>Products we buy...</h3>
        </div>
        <PriceOption title={'Cameras'} examples={['Sony', 'Nikon', 'Canon', 'Mattaport', 'vixion...']} price={2149.99} i={4}/>
        <PriceOption title={'Phones'} examples={['Iphones', 'Galaxies', 'Pixels', 'Hawaii...']} price={839.99} i={3}/>
        <PriceOption title={'Computers'} examples={['Windows', 'Mac', 'Del', 'Acer', 'Toshiba', 'Samsung', 'Intel...']} price={1500.00} i={2}/>
        <PriceOption title={'Laptops'} examples={['Alienware', 'macbook', 'Razor', 'Lenovo...']} price={699.99} i={1}/>
    </div>
  )
}

export default PricesSection
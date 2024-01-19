import { useFindAnos, useFindMarcas, useFindModelos, useFindValor } from '../lib/fipe';
import Select from '../components/Forms/Select'
import Layout from '../components/layout'
import React, { useState } from 'react'

const veiculos = [
  {
    codigo: 1,
    nome: "carros"
  },
  {
    codigo: 2,
    nome: "motos"
  },
  {
    codigo: 3,
    nome: "caminhoes"
  }
]

function Home() {
  const [isTipo, setIsTipo] = useState<string>("");
  const [isMarcas, setIsMarcas] = useState<string>("");
  const [isModelos, setIsModelos] = useState<string>("");
  const [isAnos, setIsAnos] = useState<string>("");

  const formatTipo = (tipo: string) => {
    const partes = tipo.split('+');
    const palavraExtraida = partes[0];
    return palavraExtraida
  }

  const formatCodigo = (tipo: string) => {
    const partes = tipo.split('+');
    const palavraExtraida = partes[1];
    return palavraExtraida
  }
  const findMarcas = useFindMarcas(formatTipo(isTipo));
  const findModelos = useFindModelos(formatTipo(isTipo), formatCodigo(isMarcas));
  const findAnos = useFindAnos(formatTipo(isTipo), formatCodigo(isMarcas), formatCodigo(isModelos));
  const findValor = useFindValor(formatTipo(isTipo), formatCodigo(isMarcas), formatCodigo(isModelos), formatCodigo(isAnos));
  console.log(findValor.isSuccess)


  return (
    <main className="w-full min-h-screen bg-[#0F0019]">
      <Layout>
        <article className='m-auto max-md:p-4 p-10 bg-[#321646] rounded-lg shadow-lg shadow-[#47376d] w-[60%] max-md:w-[90%] '>
          <form className='w-full flex items-center justify-center flex-col gap-4'>
            <Select placeholder="Tipo de Veiculo" data={veiculos} disabled={false} handle={setIsTipo} value={isTipo} />
            <Select placeholder="Marcas" data={findMarcas.data?.length == 0 || findMarcas.data == undefined ? [] : findMarcas?.data} disabled={false} handle={setIsMarcas} value={isMarcas} />
            <Select placeholder="Modelos" data={findModelos.data?.modelos.length == 0 || findModelos.data == undefined ? [] : findModelos?.data.modelos} disabled={false} handle={setIsModelos} value={isModelos} />
            <Select placeholder="Anos" data={findAnos.data?.length == 0 || findAnos.data == undefined ? [] : findAnos?.data} disabled={false} handle={setIsAnos} value={isAnos} />
          </form>
          <div className='rounded-lg bg-[#1f0e2c] mt-10'>
            {
              findValor.isLoading ?
                <div className='flex items-center justify-center p-10 max-md:p-4 '>
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                </div> :

                findValor.isSuccess ?
                  <div className='p-10 max-md:p-4'>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Tipo de  Veiculo:</span>
                      <span >{findValor.data?.TipoVeiculo}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Valor:</span>
                      <span>{findValor.data?.Valor}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Marca:</span>
                      <span>{findValor.data?.Marca}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Modelo:</span>
                      <span>{findValor.data?.Modelo}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Ano do Modelo:</span>
                      <span>{findValor.data?.AnoModelo}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Combustivel:</span>
                      <span>{findValor.data?.Combustivel}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Código Fipe:</span>
                      <span>{findValor.data?.CodigoFipe}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Mês de Referencia:</span>
                      <span>{findValor.data?.MesReferencia}</span>
                    </div>
                    <div className='text-gray-100 space-x-4'>
                      <span className='font-bold text-[13px]'>Sigla do Combustivel:</span>
                      <span>{findValor.data?.SiglaCombustivel}</span>
                    </div>
                  </div>
                  : findValor.isError ?

                    <div className='flex items-center justify-center p-10 max-md:p-4 text-gray-100 text-[13px] font-bold'>
                      <span>Gerou um Error</span>
                    </div> :
                    <div className='flex items-center justify-center p-10 max-md:p-4 text-gray-100 text-[13px] font-bold'>
                      <span>Selecione Todos os campos</span>
                    </div>
            }

          </div>
        </article>
      </Layout>
    </main>
  )
}

export default Home

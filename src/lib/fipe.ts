import { QueryFunctionContext, useMutation, useQuery } from "@tanstack/react-query";
import { Marcas } from "types/marcas";
import api from "../services/api";
import { Modelos } from "types/modelos";
import { Anos } from "types/anos";
import { ValorFipe } from "types/valor";

async function findMarcas(ctx: QueryFunctionContext) {
  const [, tipo] = ctx.queryKey
  const { data } = await api.get<Marcas[]>(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`);
  return data
}

async function findModelos(ctx: QueryFunctionContext) {
  const [, tipo, marca] = ctx.queryKey
  const { data } = await api.get<Modelos>(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos`);
  return data
}

async function findAnos(ctx: QueryFunctionContext) {
  const [, tipo, marca, modelo] = ctx.queryKey
  const { data } = await api.get<Anos[]>(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos`);
  return data
}

async function findValor(ctx: QueryFunctionContext) {
  const [, tipo, marca, modelo, ano] = ctx.queryKey
  const { data } = await api.get<any>(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
  return data
}
const useFindMarcas = (tipo: string) => {
  return useQuery({
    queryKey: ['marcas', tipo],
    queryFn: findMarcas,
    enabled:!!tipo
  })

};
const useFindModelos = (tipo:string, marca: string) => {
  return useQuery({
    queryKey: ['modelos', tipo, marca],
    queryFn: findModelos,
    enabled:!!marca
  })

};
const useFindAnos = (tipo:string, marca: string, modelo:string) => {
  return useQuery({
    queryKey: ['anos', tipo, marca, modelo],
    queryFn: findAnos,
    enabled:!!modelo
  })

};

const useFindValor = (tipo:string, marca: string, modelo:string, ano:string) => {
  return useQuery({
    queryKey: ['valor', tipo, marca, modelo, ano],
    queryFn: findValor,
    enabled:!!ano
  })

};

export {
  useFindMarcas,
  useFindModelos,
  useFindAnos,
  useFindValor
}
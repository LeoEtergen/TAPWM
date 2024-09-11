using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pclasses
{
    abstract class Empregado
    {
        public const string nome = "zé";
        public const string nome1 = "zzz";

        private int matricula; //atributo
        private string nomeEmpregado;
        private DateTime dataEntredaEmpresa;

        public int Matricula // propriedade
        {  
           get { return matricula; } 
           set {  matricula = value; } 
        }

        public string NomeEmpregado
        { 
            get { return nomeEmpregado; } 
            set {  nomeEmpregado = value; } 
        }

        public DateTime DataEntredaEmpresa
        { 
            get { return dataEntredaEmpresa; } 
            set {  dataEntredaEmpresa = value; } 
        }

        // métodos (ações, comportamentos)
        // virtual --> pode ser sobreescrito

        public virtual int TempoTrabalho()
        {
            // representa um intervalo de tempo
            TimeSpan span = DateTime.Today.Subtract(DataEntredaEmpresa);

            return (span.Days);
        }

        public abstract double SalarioBruto();
    }
}

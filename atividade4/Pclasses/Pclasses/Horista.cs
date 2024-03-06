using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pclasses
{
    class Horista : Empregado
    {
        public double SalarioHora { get; set; }
        public double NumeroHora { get; set; }
        public int DiasFalta { get; set; }

        public override int TempoTrabalho()
        {
            // representa um intervalo de tempo
            TimeSpan span = DateTime.Today.Subtract(DataEntredaEmpresa);

            return (Convert.ToInt32(span.Days) - DiasFalta);
        }

        public override double SalarioBruto()
        {
            return SalarioHora * NumeroHora;
        }
    }
}

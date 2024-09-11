using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pclasses
{
    class Mensalista : Empregado
    {
        public double SalarioMensal { get; set; }

        public static String Empresa = "Irmãos Silva Ltda.";
        public override double SalarioBruto()
        {  
        return SalarioMensal;
        }
    }
}

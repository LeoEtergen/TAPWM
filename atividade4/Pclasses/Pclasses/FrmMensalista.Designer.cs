namespace Pclasses
{
    partial class frmMensalista
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnInstanciarMensalista = new System.Windows.Forms.Button();
            this.lblMatricula = new System.Windows.Forms.Label();
            this.txtMatricula = new System.Windows.Forms.TextBox();
            this.txtNome = new System.Windows.Forms.TextBox();
            this.lblNome = new System.Windows.Forms.Label();
            this.txtSalarioMensal = new System.Windows.Forms.TextBox();
            this.lblSalarioMensal = new System.Windows.Forms.Label();
            this.txtDataEntrada = new System.Windows.Forms.TextBox();
            this.lblDataEntrada = new System.Windows.Forms.Label();
            this.btnInstanciarMensalistaParametros = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnInstanciarMensalista
            // 
            this.btnInstanciarMensalista.Location = new System.Drawing.Point(111, 289);
            this.btnInstanciarMensalista.Name = "btnInstanciarMensalista";
            this.btnInstanciarMensalista.Size = new System.Drawing.Size(178, 56);
            this.btnInstanciarMensalista.TabIndex = 0;
            this.btnInstanciarMensalista.Text = "Instanciar Mensalista";
            this.btnInstanciarMensalista.UseVisualStyleBackColor = true;
            // 
            // lblMatricula
            // 
            this.lblMatricula.AutoSize = true;
            this.lblMatricula.Location = new System.Drawing.Point(107, 83);
            this.lblMatricula.Name = "lblMatricula";
            this.lblMatricula.Size = new System.Drawing.Size(73, 20);
            this.lblMatricula.TabIndex = 1;
            this.lblMatricula.Text = "Matrícula";
            // 
            // txtMatricula
            // 
            this.txtMatricula.Location = new System.Drawing.Point(330, 80);
            this.txtMatricula.Name = "txtMatricula";
            this.txtMatricula.Size = new System.Drawing.Size(80, 26);
            this.txtMatricula.TabIndex = 2;
            // 
            // txtNome
            // 
            this.txtNome.Location = new System.Drawing.Point(330, 112);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(283, 26);
            this.txtNome.TabIndex = 4;
            // 
            // lblNome
            // 
            this.lblNome.AutoSize = true;
            this.lblNome.Location = new System.Drawing.Point(107, 115);
            this.lblNome.Name = "lblNome";
            this.lblNome.Size = new System.Drawing.Size(51, 20);
            this.lblNome.TabIndex = 3;
            this.lblNome.Text = "Nome";
            // 
            // txtSalarioMensal
            // 
            this.txtSalarioMensal.Location = new System.Drawing.Point(330, 144);
            this.txtSalarioMensal.Name = "txtSalarioMensal";
            this.txtSalarioMensal.Size = new System.Drawing.Size(100, 26);
            this.txtSalarioMensal.TabIndex = 6;
            // 
            // lblSalarioMensal
            // 
            this.lblSalarioMensal.AutoSize = true;
            this.lblSalarioMensal.Location = new System.Drawing.Point(107, 147);
            this.lblSalarioMensal.Name = "lblSalarioMensal";
            this.lblSalarioMensal.Size = new System.Drawing.Size(113, 20);
            this.lblSalarioMensal.TabIndex = 5;
            this.lblSalarioMensal.Text = "Salário Mensal";
            // 
            // txtDataEntrada
            // 
            this.txtDataEntrada.Location = new System.Drawing.Point(330, 176);
            this.txtDataEntrada.Name = "txtDataEntrada";
            this.txtDataEntrada.Size = new System.Drawing.Size(100, 26);
            this.txtDataEntrada.TabIndex = 8;
            // 
            // lblDataEntrada
            // 
            this.lblDataEntrada.AutoSize = true;
            this.lblDataEntrada.Location = new System.Drawing.Point(107, 179);
            this.lblDataEntrada.Name = "lblDataEntrada";
            this.lblDataEntrada.Size = new System.Drawing.Size(217, 20);
            this.lblDataEntrada.TabIndex = 7;
            this.lblDataEntrada.Text = "Data de Entrada na Empresa";
            // 
            // btnInstanciarMensalistaParametros
            // 
            this.btnInstanciarMensalistaParametros.Location = new System.Drawing.Point(435, 289);
            this.btnInstanciarMensalistaParametros.Name = "btnInstanciarMensalistaParametros";
            this.btnInstanciarMensalistaParametros.Size = new System.Drawing.Size(178, 56);
            this.btnInstanciarMensalistaParametros.TabIndex = 9;
            this.btnInstanciarMensalistaParametros.Text = "Instanciar Mensalista passando parâmetros";
            this.btnInstanciarMensalistaParametros.UseVisualStyleBackColor = true;
            // 
            // frmMensalista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnInstanciarMensalistaParametros);
            this.Controls.Add(this.txtDataEntrada);
            this.Controls.Add(this.lblDataEntrada);
            this.Controls.Add(this.txtSalarioMensal);
            this.Controls.Add(this.lblSalarioMensal);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.lblNome);
            this.Controls.Add(this.txtMatricula);
            this.Controls.Add(this.lblMatricula);
            this.Controls.Add(this.btnInstanciarMensalista);
            this.Name = "frmMensalista";
            this.Text = "frmMensalista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnInstanciarMensalista;
        private System.Windows.Forms.Label lblMatricula;
        private System.Windows.Forms.TextBox txtMatricula;
        private System.Windows.Forms.TextBox txtNome;
        private System.Windows.Forms.Label lblNome;
        private System.Windows.Forms.TextBox txtSalarioMensal;
        private System.Windows.Forms.Label lblSalarioMensal;
        private System.Windows.Forms.TextBox txtDataEntrada;
        private System.Windows.Forms.Label lblDataEntrada;
        private System.Windows.Forms.Button btnInstanciarMensalistaParametros;
    }
}
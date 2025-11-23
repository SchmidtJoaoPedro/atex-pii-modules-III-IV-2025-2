// ===== SISTEMA DE CERTIFICADOS NAVCODE =====
// Sistema para gerar certificados de conclusão de cursos

/**
 * Mapeamento de cursos para nomes completos
 */
const courseNames = {
  'cursor-informatica': 'Técnico em Informática',
  'curso-web': 'Desenvolvimento Web',
  'curso-redes': 'Redes de Computadores',
  'curso-seguranca': 'Segurança da Informação',
  'curso-python': 'Programação Python',
  'curso-banco-dados': 'Banco de Dados'
};

/**
 * Gera um certificado de conclusão de curso
 * @param {string} courseId - ID do curso
 * @param {string} courseName - Nome do curso
 * @param {string} studentName - Nome do aluno
 * @param {string} completionDate - Data de conclusão
 * @returns {Promise<string>} - URL da imagem do certificado
 */
async function generateCertificate(courseId, courseName, studentName, completionDate) {
  return new Promise((resolve) => {
    // Criar canvas para o certificado
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Fundo branco
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Borda decorativa
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Borda interna
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

    // Logo/Ícone NavCode (simulado com texto)
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('NavCode', canvas.width / 2, 150);

    // Título do certificado
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 36px Arial';
    ctx.fillText('CERTIFICADO DE CONCLUSÃO', canvas.width / 2, 220);

    // Texto principal
    ctx.fillStyle = '#374151';
    ctx.font = '28px Arial';
    ctx.fillText('Certificamos que', canvas.width / 2, 280);

    // Nome do aluno
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 40px Arial';
    ctx.fillText(studentName, canvas.width / 2, 340);

    // Texto do curso
    ctx.fillStyle = '#374151';
    ctx.font = '28px Arial';
    ctx.fillText('concluiu com sucesso o curso de', canvas.width / 2, 400);

    // Nome do curso
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 36px Arial';
    ctx.fillText(courseName, canvas.width / 2, 460);

    // Data
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px Arial';
    ctx.fillText(`Concluído em ${completionDate}`, canvas.width / 2, 520);

    // Código do certificado
    const certificateCode = generateCertificateCode(courseId, studentName, completionDate);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '18px Arial';
    ctx.fillText(`Código: ${certificateCode}`, canvas.width / 2, 600);

    // Assinaturas
    ctx.fillStyle = '#374151';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Equipe NavCode', 200, 720);
    ctx.textAlign = 'right';
    ctx.fillText('Data: ' + completionDate, canvas.width - 200, 720);

    // Linha para assinatura
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(200, 680);
    ctx.lineTo(400, 680);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width - 400, 680);
    ctx.lineTo(canvas.width - 200, 680);
    ctx.stroke();

    // Converter canvas para imagem
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      resolve(url);
    }, 'image/png');
  });
}

/**
 * Gera um código único para o certificado
 */
function generateCertificateCode(courseId, studentName, date) {
  const hash = btoa(`${courseId}-${studentName}-${date}`).substring(0, 16).toUpperCase();
  return `NC-${hash}`;
}

/**
 * Baixa o certificado como imagem
 */
async function downloadCertificate(courseId, courseName, studentName, completionDate) {
  try {
    const imageUrl = await generateCertificate(courseId, courseName, studentName, completionDate);
    
    // Criar link de download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `Certificado_${courseName.replace(/\s+/g, '_')}_${studentName.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Limpar URL após download
    setTimeout(() => URL.revokeObjectURL(imageUrl), 100);
    
    return { success: true, message: 'Certificado baixado com sucesso!' };
  } catch (error) {
    console.error('Erro ao gerar certificado:', error);
    return { success: false, message: 'Erro ao gerar certificado. Tente novamente.' };
  }
}

/**
 * Exibe o certificado em um modal
 */
async function showCertificate(courseId, courseName, studentName, completionDate) {
  try {
    const imageUrl = await generateCertificate(courseId, courseName, studentName, completionDate);
    
    // Criar modal
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;
    
    modal.innerHTML = `
      <div style="position: relative; max-width: 90%; max-height: 90%;">
        <button onclick="this.closest('.certificate-modal').remove(); URL.revokeObjectURL('${imageUrl}')" 
                style="position: absolute; top: -40px; right: 0; background: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 16px;">
          ✕ Fechar
        </button>
        <img src="${imageUrl}" style="max-width: 100%; max-height: 90vh; border: 4px solid #059669; border-radius: 8px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);" alt="Certificado">
        <div style="text-align: center; margin-top: 20px;">
          <button onclick="downloadCertificateFromModal('${courseId}', '${courseName}', '${studentName}', '${completionDate}')" 
                  style="background: #059669; color: white; border: none; padding: 12px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">
            📥 Baixar Certificado
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
        URL.revokeObjectURL(imageUrl);
      }
    });
    
  } catch (error) {
    console.error('Erro ao exibir certificado:', error);
    alert('Erro ao exibir certificado. Tente novamente.');
  }
}

/**
 * Função auxiliar para download do modal
 */
async function downloadCertificateFromModal(courseId, courseName, studentName, completionDate) {
  await downloadCertificate(courseId, courseName, studentName, completionDate);
}

/**
 * Verifica se o curso foi concluído e gera certificado
 */
function checkCourseCompletionAndGenerateCertificate(courseId) {
  const progress = JSON.parse(localStorage.getItem(`navcode_course_progress_${courseId}`) || '{}');
  const courseName = courseNames[courseId] || courseId;
  const currentUser = getCurrentUser();
  const studentName = currentUser ? (currentUser.name || currentUser.username) : 'Aluno';
  
  // Verificar se todos os capítulos foram concluídos
  // Isso depende da estrutura de cada curso
  const totalChapters = 6; // Ajustar conforme necessário
  
  if (progress.completedChapters && progress.completedChapters.length >= totalChapters) {
    const completionDate = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    
    // Salvar informação de certificado gerado
    const certificateData = {
      courseId: courseId,
      courseName: courseName,
      studentName: studentName,
      completionDate: completionDate,
      certificateCode: generateCertificateCode(courseId, studentName, completionDate),
      generatedAt: new Date().toISOString()
    };
    
    localStorage.setItem(`navcode_certificate_${courseId}`, JSON.stringify(certificateData));
    
    return certificateData;
  }
  
  return null;
}

// Exportar funções globais
window.generateCertificate = generateCertificate;
window.downloadCertificate = downloadCertificate;
window.showCertificate = showCertificate;
window.checkCourseCompletionAndGenerateCertificate = checkCourseCompletionAndGenerateCertificate;


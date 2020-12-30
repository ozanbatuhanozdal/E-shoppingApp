﻿using API.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace API.Services.Concrete
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailConfiguration _emailConfig;
      

        public EmailSender(EmailConfiguration emailConfig)
        {
            _emailConfig = emailConfig;            
        }

        public void SendEmail(string toEmail, string Guid)
        {
            const string subject = "TRENDBURADA Şifre Sıfırlama Maili";
            string body = $"Linke tıkladığınız zaman şifre sıfırlama ekranına yönlendiriliceksiniz... <a href='http://localhost:4200/ChangePassword/{Guid}' target='_blank'>tıklayınız.</a> ";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(_emailConfig.From, _emailConfig.Password),
                Timeout = 20000
            };
            using var mail = new MailMessage(_emailConfig.From, toEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true,

            };
            smtp.Send(mail);
        }
    }
}

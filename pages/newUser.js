import styles from '/styles/pages/Login.module.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { newUser } from '../services/auth.service';
import Link from 'next/link';
import Router from 'next/router';

/**
 * =====
 * Login
 * =====
 * @author codethebasics by DuckTech
 */
export default function NewUser() {
    const { register, handleSubmit } = useForm();

    useEffect(() => {}, []);

    const handleNewUser = async (data) => {
        const response = await newUser(data);
        Router.push('/login');
    };

    return (
        <form
            className={styles.loginContainer}
            onSubmit={handleSubmit(handleNewUser)}
        >
            <div className={styles.formControl} style={{ textAlign: 'center' }}>
                <img src="/img/logo_CRD.png" height={50} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputName">Nome</label>
                <input
                    placeholder="João da Silva"
                    type="text"
                    id="inputName"
                    {...register('name')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputDocumentType">Tipo de documento</label>
                <select
                    id="inputDocumentType"
                    {...register('document_type_id')}
                >
                    <option value="">Selecione</option>
                    <option value="5">CPF</option>
                    <option value="4">Passaporte</option>
                </select>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputDocument">Documento</label>
                <input
                    placeholder="000.000.000-00"
                    type="text"
                    id="inputDocument"
                    {...register('document_user')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputUsername">Email</label>
                <input
                    type="email"
                    id="inputUsername"
                    placeholder="joaodasilva@email.com"
                    {...register('email')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputWhatsapp">WhatsApp</label>
                <input
                    type="text"
                    id="inputWhatsapp"
                    placeholder="(00) 00000 0000"
                    {...register('whatsapp')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputPassword">Senha</label>
                <input
                    id="inputPassword"
                    type="password"
                    placeholder="•••••••"
                    {...register('password')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputConfirmPassword">Confirme a senha</label>
                <input
                    id="inputConfirmPassword"
                    type="password"
                    placeholder="•••••••"
                    {...register('confirmPassword')}
                />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputUf">UF</label>
                <select id="inputUf" name="estado" {...register('uf')}>
                    <option value="">Selecione</option>
                    <option value="AC">AC - Acre</option>
                    <option value="AL">AL - Alagoas</option>
                    <option value="AP">AP - Amapá</option>
                    <option value="AM">AM - Amazonas</option>
                    <option value="BA">BA - Bahia</option>
                    <option value="CE">CE - Ceará</option>
                    <option value="DF">DF - Distrito Federal</option>
                    <option value="ES">ES - Espírito Santo</option>
                    <option value="GO">GO - Goiás</option>
                    <option value="MA">MA - Maranhão</option>
                    <option value="MT">MT - Mato Grosso</option>
                    <option value="MS">MS - Mato Grosso do Sul</option>
                    <option value="MG">MG - Minas Gerais</option>
                    <option value="PA">PA - Pará</option>
                    <option value="PB">PB - Paraíba</option>
                    <option value="PR">PR - Paraná</option>
                    <option value="PE">PE - Pernambuco</option>
                    <option value="PI">PI - Piauí</option>
                    <option value="RJ">RJ - Rio de Janeiro</option>
                    <option value="RN">RN - Rio Grande do Norte</option>
                    <option value="RS">RS - Rio Grande do Sul</option>
                    <option value="RO">RO - Rondônia</option>
                    <option value="RR">RR - Roraima</option>
                    <option value="SC">SC - Santa Catarina</option>
                    <option value="SP">SP - São Paulo</option>
                    <option value="SE">SE - Sergipe</option>
                    <option value="TO">TO - Tocantins</option>
                </select>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="inputCity">Cidade</label>
                <input
                    id="inputCity"
                    placeholder="Curitiba"
                    {...register('city')}
                />
            </div>
            <div className={styles.formControl}>
                <button className={styles.cta}>Cadastrar</button>
                <div className={styles.subform}>
                    <div>
                        <Link href="/login">
                            <a>Entrar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

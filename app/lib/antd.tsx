"use client"

import { Button, Form, Input, Select } from 'antd'
import { validateMessages, selectLevelExp } from '../Comons/Utils'
import SearchBar from '../Components/SearchBar'

export default function FormAnt() {

    const [form] = Form.useForm()

    const onFinish = () => {
        const values: string = form.getFieldsValue()
        console.log(values)
    }

return (
    <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        form={form}
    >
        <Form.Item 
            name='name' 
            label="Name" 
            rules={[{ required: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item 
            name='email' 
            label="Email" 
            rules={[{ type: 'email', required: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item 
            name='select' 
            label="Sua Posiçao" 
            rules={[{ required: true }]}
        >
            <Select placeholder="Escolha uma opção">
                <Select.Option
                    id={selectLevelExp.levelExperience_Treinee_ID}
                    value={selectLevelExp.levelExperience_Treinee}
                >
                    Treinee
                </Select.Option>

                <Select.Option 
                    id={selectLevelExp.levelExperience_Internship_ID}
                    value={selectLevelExp.levelExperience_Internship}
                >
                    Estágio
                </Select.Option>

                <Select.Option 
                    id={selectLevelExp.levelExperience_Junior_ID}
                    value={selectLevelExp.levelExperience_Junior}
                >
                    Júnior
                </Select.Option>

                <Select.Option 
                    id={selectLevelExp.levelExperience_MidSenior_ID}
                    value={selectLevelExp.levelExperience_MidSenior}
                >
                    Pleno
                </Select.Option>

                <Select.Option 
                    id={selectLevelExp.levelExperience_Senior_ID}
                    value={selectLevelExp.levelExperience_Senior}
                >
                    Sênior
                </Select.Option>

                <Select.Option 
                    id={selectLevelExp.levelExperience_TechLead_ID}
                    value={selectLevelExp.levelExperience_TechLead}
                >
                    Tech Lead
                </Select.Option>

                <Select.Option 
                    id={selectLevelExp.levelExperience_TechExpert_ID}
                    value={selectLevelExp.levelExperience_TechExpert}
                >
                    Especialista
                </Select.Option>

            </Select>
        </Form.Item>

        <SearchBar form={form} />

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Enviar
            </Button>
        </Form.Item>
    </Form>
)
}
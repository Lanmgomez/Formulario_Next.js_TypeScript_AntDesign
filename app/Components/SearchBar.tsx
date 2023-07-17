"use client"

import { useState, useEffect } from 'react'
import { Form, AutoComplete, Tag } from 'antd'
import { default_options } from '../Comons/Utils'
import { FormInstance } from 'antd/lib/form'

const SearchBar = ({ form }: { form: FormInstance<any> } ) => {

    const [autoCompleteValue, setAutoCompleteValue] = useState <string> ('')
    const [selectedItems, setSelectedItems] = useState <string[]> ([])

    useEffect(() => {

        form.setFieldsValue({ knowledge: selectedItems })

    }, [selectedItems])

    function handleSelect(value: string) {
        setSelectedItems([...selectedItems, value])
        setAutoCompleteValue('')
    }

    function handleDelete(value: string) {
        setSelectedItems(selectedItems.filter((item: string) => item !== value))
    }

return (
    <Form.Item
        name="knowledge"
        label="Conhecimentos"
        rules={[{ required: true }]}
    >
        <div>
            <AutoComplete 
                style={{ maxWidth: 500 }}
                placeholder="Selecione seus conhecimentos"
                options={default_options}
                filterOption={true}
                onSelect={handleSelect}
                value={autoCompleteValue}
                onChange={setAutoCompleteValue}
            />
                <h3>Itens selecionados:</h3>

                {selectedItems.map((item: string) => (
                    <Tag
                        key={item}
                        closable
                        onClose={() => handleDelete(item)}
                        style={{ marginBottom: '4px' }}
                    >
                        {item}
                    </Tag>
                ))}
        </div>
    </Form.Item>
)
}

export default SearchBar
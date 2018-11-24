import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import ImagePicker from 'react-native-image-picker';


export default class FormChamada extends Component {

	constructor(props) {
		super(props);
		this.state = {
			titulo: '',
			descricao: '',
			labelFoto: 'Toque na camera ao lado para enviar uma foto da ocorrência.'
		}
	}
	componentWillMount() {
		this.setState({
			services: ['Carregando...'],
			selectedService: ''
		})
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				services: ['Eixo 3 - Sala 1', 'Eixo 3 - Sala 2', 'Eixo 3 - Sala 3']
			})
		}, 3000);
	}

	alteraTitulo(titulo) {
		this.setState({ titulo })

	}

	alteraDesc(descricao) {
		this.setState({ descricao })
	}

	botaoEnviar() {
		console.log(Date());
	}

	enviarFoto() {
		const options = {
			title: 'Enviar foto',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: response.uri };

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					avatarSource: source,
				});
				this.setState({ labelFoto: 'Foto enviada.' });
			}
		});
	}

	render() {
		let serviceItems = this.state.services.map((s, i) => {
			return <Picker.Item key={i} value={s} label={s} />
		});
		return (
			<ScrollView style={styles.chamadoView}>
				<View style={styles.tituloView}>
					<Text style={styles.label}>Título</Text>
					<TextInput
						style={styles.tituloInput}
						onChangeText={txt => {
							this.alteraTitulo(txt)
						}}
						maxLength={40}
						placeholder='Dê um titulo para o problema.'
					/>
				</View>
				<View style={styles.descView}>
					<Text style={styles.label}>Descrição</Text>
					<TextInput
						style={styles.descInput}
						multiline
						numberOfLines={2}
						onChangeText={txt => {
							this.alteraDesc(txt)
						}}
						placeholder='Detalhe o problema e o local...'
					/>
				</View>
				<View style={styles.fotoView}>
					<TouchableOpacity
						onPress={
							() => {
								this.enviarFoto()
							}
						}>
						<Image source={require('../imgs/camera.png')}
							style={styles.iconeCamera} />
					</TouchableOpacity>
					<View style={styles.viewLabelFoto}>
						<Text style={styles.labelFoto}>{this.state.labelFoto}</Text>
					</View>
				</View>
				<Picker
					selectedValue={this.state.selectedService}
					onValueChange={(service) => (this.setState({ selectedService: service }))} >

					{serviceItems}

				</Picker>
				<View style={styles.botaoView}>
					<Button
						onPress={() => {
							this.botaoEnviar()
						}
						}
						title="Enviar"
					/>
				</View>
			</ScrollView>
		);
	}
}

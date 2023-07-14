package com.alti.bookmyevent.ORM;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(unique=true)
	@Pattern(regexp="^[a-zA-Z &//]{1,}",message="Invalid category name.")  
	@NotBlank
	private String name;
	
	@NotBlank
	private String matIcon;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMatIcon() {
		return matIcon;
	}

	public void setMatIcon(String matIcon) {
		this.matIcon = matIcon;
	}


	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", matIcon=" + matIcon + "]";
	}
}
